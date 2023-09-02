"use strict";
class Generate {
    constructor() {
        this.content = document.getElementById('content');
        this.long = document.getElementById('length');
        this.kind = document.getElementById('kind');
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
        });
    }
    ReGenerate() {
        this.regenerate.addEventListener('click', (event) => {
            event.preventDefault();
        });
    }
    Copy() {
        this.copy.addEventListener('click', (event) => {
            event.preventDefault();
        });
    }
}
const generate = new Generate();
