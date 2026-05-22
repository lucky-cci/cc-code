const version = process.env.CLAUDE_CODE_LOCAL_VERSION ?? '0.0.0'
const packageUrl = process.env.CLAUDE_CODE_LOCAL_PACKAGE_URL ?? 'cc-code'
const buildTime = process.env.CLAUDE_CODE_LOCAL_BUILD_TIME ?? new Date().toISOString()

process.env.CLAUDE_CODE_LOCAL_SKIP_REMOTE_PREFETCH ??= '1'

Object.assign(globalThis, {
  MACRO: {
    VERSION: version,
    PACKAGE_URL: packageUrl,
    NATIVE_PACKAGE_URL: packageUrl,
    BUILD_TIME: buildTime,
    FEEDBACK_CHANNEL: 'https://github.com/lucky-cci/cc-code/issues',
    VERSION_CHANGELOG: '',
    ISSUES_EXPLAINER: 'post at https://github.com/lucky-cci/cc-code/issues',
  },
})

if (process.env.CALLER_DIR) {
  process.chdir(process.env.CALLER_DIR)
}