exports.decorateConfig = (config) => {

  const colorOptions = [
    '#33ff00',
    '#ffff00',
    '#00ffff',
    '#0070ff',
    '#cc00ff'
  ]

  const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]

  return Object.assign({}, config, {
    borderColor: color,
    cursorColor: color,
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: ${color};
      }
      .tabs_nav .tabs_title {
        color: ${color};
      }
    `
  });
}
