import { DEFAULT_VARIANT, DEFAULT_ROUNDED, DEFAULT_SIZE } from '../../utils/config'

/**
 * @type {{ size: string }}
 * @values xs|sm|md|lg|xl
 * */
export const sizeProp = {
  size: {
    type: String,
    default: DEFAULT_SIZE
  }
}

export const roundedProp = {
  /**
   * @description Use specific border radius to root
   * @type {String}
   * @values string | RouteLocationPathRaw | RouteLocationNamedRaw
   * @see https://router.vuejs.org/api/#routelocationraw
   */
  rounded: {
    type: String,
    default: DEFAULT_ROUNDED
  }
}

export const toProp = {
  /**
   * @description Route Location the link should navigate to when clicked on.
   * @type {String}
   * @values string | RouteLocationPathRaw | RouteLocationNamedRaw
   * @see https://router.vuejs.org/api/#routelocationraw
   */
  to: {
    type: [String, Object],
    default: undefined
  }
}

export const variantProp = {
  /**
   * @description Use specific variant injected to default classes. Please see configuration for more details.
   * @type {String}
   * @values string
   */
  variant: {
    type: String,
    default: DEFAULT_VARIANT
  }
}
