/**
 * Flip to `true` and redeploy to pause the tracker (shutdown page).
 * Or set Vercel env `VITE_SITE_SHUTDOWN=true` (overrides this default when set).
 */
const envFlag = import.meta.env.VITE_SITE_SHUTDOWN

export const SITE_SHUTDOWN: boolean =
  envFlag === undefined || envFlag === ''
    ? false
    : envFlag === '1' || envFlag.toLowerCase() === 'true'
