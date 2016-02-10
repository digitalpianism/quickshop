// Instantiate configurable swatches
if (typeof Product.ConfigurableSwatches === "function")
{
    var swatchesConfig = new Product.ConfigurableSwatches(spConfig);
}
// Instantiate Magento Zoom
product_zoom = new Product.Zoom('image', 'track', 'handle', 'zoom_in', 'zoom_out', 'track_hint');