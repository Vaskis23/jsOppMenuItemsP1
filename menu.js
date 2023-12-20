class MenuItem {
    constructor (title, url) {
        this.title = title
        this.url = url
    }

    render () {
        return `
            <a href="${this.url}">${this.title}</a>
        `
    }
}

class Menu {
    constructor (items) {
        this.items = items
    }


    render() {
        return `<nav>` + this.items.map(item => item.render()).join() + `</nav>`
    }
}