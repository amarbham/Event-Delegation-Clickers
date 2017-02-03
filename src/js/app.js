/** Creates new clickers when an button is clicked. 
 *  Has one listener on the parent. 
 * When a child of the parent is clicked. 
 * The event bubbles up and the element is recieved by the listener  
 * why? No need to set up seperate event listeners for multiple buttons 
 * -Better performance
 * -Less code 
 * -Better seperation of concerns **/

const clickers = [{
    limit: 10,
    className: 'target-10',
    completedString: 'Finished!!'
}, {
    limit: 1,
    className: 'target-1',
    completedString: `Done!!`
}, {
    limit: 15,
    className: 'target-15',
    completedString: `Complete!!`
}]


document.getElementById('clickers')
    .addEventListener('click', function (e) {
        let config = {}

        clickers.forEach((clicker, index) => {
            if (e.target.classList.contains(clicker.className)) {
                config = Object.assign({
                    elem: e.target
                }, clicker)
            }
        })

        const clicker = new Clicker(config)
        clicker.onClick()
    });


class Clicker {
    constructor({
        limit = 15,
        completedString = 'done'
    }) {
        this.limit = limit;
        this.limitCompleteString = completedString;
    }

    onClick() {
        console.log(`
            limit: ${this.limit}
            string: ${this.limitCompleteString}`
        )
    }
}