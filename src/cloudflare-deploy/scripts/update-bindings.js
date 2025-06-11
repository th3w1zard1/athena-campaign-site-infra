#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script to update wrangler.jsonc with actual resource IDs
 * This script runs after resources are created and updates the wrangler config
 */

const wranglerPath = path.resolve(__dirname, '..', 'wrangler.jsonc');

// Ensure scripts directory exists
if (!fs.existsSync(__dirname)) {
  fs.mkdirSync(__dirname, { recursive: true });
}

console.log('🔄 Updating wrangler.jsonc with resource bindings...');

try {
  // Read wrangler.jsonc
  const wranglerConfig = fs.readFileSync(wranglerPath, 'utf8');

  // Get KV namespace ID - updated for Wrangler v4
  console.log('📦 Getting KV namespace ID...');
  // The --json flag is no longer supported in Wrangler v4
  const kvOutput = execSync('npx wrangler kv namespace list').toString();
  // Parse the table output from wrangler
  const kvLines = kvOutput.split('\n').filter(line => line.includes('CAMPAIGN_KV'));
  
  let campaignKvId = null;
  if (kvLines.length > 0) {
    // Extract ID from the line containing CAMPAIGN_KV
    const parts = kvLines[0].split(/\s+/).filter(Boolean);
    // ID is typically the second column in the output
    campaignKvId = parts[1];
  }

  if (!campaignKvId) {
    console.warn('⚠️ CAMPAIGN_KV namespace not found. Make sure to run setup:kv first.');
  } else {
    console.log(`✅ Found CAMPAIGN_KV namespace: ${campaignKvId}`);
  }

  // Get D1 database ID - updated for Wrangler v4
  console.log('🗄️ Getting D1 database ID...');
  const d1Output = execSync('npx wrangler d1 list').toString();
  // Parse the table output
  const d1Lines = d1Output.split('\n').filter(line => line.includes('athena-campaign-db'));
  
  let campaignDbId = null;
  if (d1Lines.length > 0) {
    // Extract UUID from the line containing athena-campaign-db
    const parts = d1Lines[0].split(/\s+/).filter(Boolean);
    // UUID is typically the first column in the output
    campaignDbId = parts[0];
  }

  if (!campaignDbId) {
    console.warn('⚠️ athena-campaign-db not found. Make sure to run setup:d1 first.');
  } else {
    console.log(`✅ Found athena-campaign-db: ${campaignDbId}`);
  }

  // Update wrangler.jsonc with actual IDs
  let updatedConfig = wranglerConfig;

  if (campaignKvId) {
    updatedConfig = updatedConfig.replace(
      /"id": "\${CAMPAIGN_KV_ID}"/,
      `"id": "${campaignKvId}"`
    );
  }

  if (campaignDbId) {
    updatedConfig = updatedConfig.replace(
      /"database_id": "\${CAMPAIGN_DB_ID}"/,
      `"database_id": "${campaignDbId}"`
    );
  }

  // Write updated config back to file
  fs.writeFileSync(wranglerPath, updatedConfig);
  console.log('✅ Updated wrangler.jsonc with resource bindings');

} catch (error) {
  console.error('❌ Error updating bindings:', error.message);
  process.exit(1);
} 