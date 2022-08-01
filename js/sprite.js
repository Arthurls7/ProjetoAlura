function createSprite(tagSprite) {
    return sprite = {
        tag: document.querySelector(tagSprite),
        actualFrame: 0,
        lastFrame: 9,

        reset: function () {
            this.tag.className = `sprite frame0`;
            actualFrame = 0;
        },

        isFinished: function() {
            return this.actualFrame == this.lastFrame ? true : false;
        },

        nextFrame: function () {
            this.tag.className = `sprite frame${++this.actualFrame}`
        }

    }
}