export default {
    click: target => {
        return click(target.bounds().centerX(), target.bounds().centerY())
    }
}
