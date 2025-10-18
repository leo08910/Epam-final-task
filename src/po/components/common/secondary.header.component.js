const { $ } = require('@wdio/globals')

class SecondaryHeader {
    get rootElement() { return $("[data-test='secondary-header']") }
    get title() { return $("[data-test='title']")}
}

module.exports = SecondaryHeader;