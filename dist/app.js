"use strict";
class Generate {
    constructor() {
        this.content = document.getElementById('content');
        this.long = document.getElementById('length');
        this.kind = document.getElementById('kind');
        this.processContent = [];
        this.processLong = 0;
        this.processKind = '';
        this.password = document.getElementById('password');
        this.generate = document.getElementById('generate');
        this.regenerate = document.getElementById('re-generate');
        this.copy = document.getElementById('copy');
        this.Generate();
        this.ReGenerate();
        this.Copy();
    }
    Generate() {
        this.generate.addEventListener('click', (event) => {
            event.preventDefault();
            this.ProcessInputValue();
            this.MakePassword();
        });
    }
    ProcessInputValue() {
        this.processContent = this.content.value.split(/[\s,]+/);
        this.processContent = this.processContent.filter(function (item) {
            return item.trim() !== '';
        });
        this.processLong = +this.long.value;
        this.processKind = this.kind.value;
    }
    MakePassword() {
        console.log('make password');
    }
    ReGenerate() {
        this.regenerate.addEventListener('click', (event) => {
            event.preventDefault();
            this.MakePassword();
        });
    }
    Copy() {
        this.copy.addEventListener('click', (event) => {
            event.preventDefault();
            const text = this.password.innerText;
            const hiddenTextArea = document.createElement("textarea");
            hiddenTextArea.value = text;
            this.password.appendChild(hiddenTextArea);
            hiddenTextArea.select();
            document.execCommand('copy');
            this.password.removeChild(hiddenTextArea);
            alert("コピーしました");
        });
    }
}
const generate = new Generate();
