//MUST HAVE - CREATE A TEMPLATE TAG
var template_textcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textcont.innerHTML = `
    <div class="textcont">
        <p>text</p>
    </div>
    <style>
        .textcont {
            background-color: white;
            width: 100%;
            height:140px;
        }
        .textcont > p {
            padding: 1em;
            font-size: 24px;
            line-height: 1.3em;
        }
    </style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTextcont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_textcont.content.cloneNode(true)); //use the template to make a clone
        this.textOrder = 1;
        if(this.getAttribute("story_text")) {
            this.shadowRoot.querySelector(".textcont > p").innerText = this.getAttribute("story_text"); 
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    updateTextCont(){
        if(this.textOrder === 1) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Mr. Green wakes up in the morning with an alarm from his brand new phone. 
            Click on his phone to turn the alarm off.`
            this.document.querySelector("the-footprincycle").changeFootPrintCycle(type="ddd");

        }

        if(this.textOrder === 2) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = 
            `Great! Now Mr. Green is ready to go to work.
        Click on his car to get it started. `

        }
        if(this.textOrder === 3) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
            `His office is quite hot. He grabs a water bottle from the vending machine to cool down,
        Click on the bottle to help Mr. Green quench his thirst. `
        }
        if(this.textOrder === 4) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
            `Great! However, the water doesn’t seem to help. He wants to turn on his fan.
        Click on his desk fan to help him cool down.`
        }
        if(this.textOrder === 5) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
        `Mr. Green is feeling cool now!
        Click on Mr. Green’s computer screen to get his work day started.`
        }
        if(this.textOrder === 6) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
        `Mr. Green usually does his laundry after work.
        Click on the laundry detergent to help Mr. Green start his laundry.`
        }
        if(this.textOrder === 7) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
        `Mr. Green finishes his laundry.
        Click on the laundry basket to help him throw his clothes into the dryer. `
        }
        if(this.textOrder === 8) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
        `While folding his laundry, Mr. Green remembers the movie that his collegue recommended. 
        Click on the tablet to watch Netflix.`
        }
        if(this.textOrder === 9) {
            this.shadowRoot.querySelector(".textcont > p").innerText = 
        `Mr. Green fell asleep on the couch while watching TV.
        It seems that he forgot to turn off the light. Click on the switch to turn off the light for him.`
        }
        if(this.textOrder === 10) {
            window.location.href="/cta.html";
        }
    }
    decreaseTextCont() {
        this.textOrder = this.textOrder - 1;
        document.querySelector("the-time").decreaseTime();
        this.updateTextCont();
        document.querySelector("the-object").remObj();
    }
    
    increaseTextCont() {
        this.textOrder = this.textOrder + 1;
        document.querySelector("the-time").increaseTime();
        this.updateTextCont();
        // document.querySelector("the-object").addObj();
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textcont", TheTextcont)