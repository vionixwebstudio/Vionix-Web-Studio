// The opening animation tells the rest of the page when it has finished, so the hero can start right after.
let resolve
export const introDone = new Promise((r) => (resolve = r))
export const finishIntro = () => resolve()
