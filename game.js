/* supporting arrow keys */
import {rovingIndex} from 'roving-ux'

rovingIndex({
  element: document.querySelector('.threeD-button-set'),
  target: 'button',
})
const menu = document.querySelector('.threeD-button-set')
const menuRect = menu.getBoundingClientRect()

const { matches:motionOK } = window.matchMedia(
  '(prefers-reduced-motion: no-preference)'
)
const getAngles = (clientX, clientY) => {
    const { x, y, width, height } = menuRect
  
    const dx = clientX - (x + 0.5 * width)
    const dy = clientY - (y + 0.5 * height)
  
    return {dx,dy}
  }

  if (motionOK) {
    window.addEventListener('mousemove', ({target, clientX, clientY}) => {
      const {dx,dy} = getAngles(clientX, clientY)
  
      menu.attributeStyleMap.set('--x', `${dy / 20}deg`)
      menu.attributeStyleMap.set('--y', `${dx / 20}deg`)
    })
  }