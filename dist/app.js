"use strict";
class Generate {
    constructor() {
        this.content = document.getElementById('content');
        this.long = document.getElementById('length');
        this.kind = document.getElementById('kind');
        this.processContent = [];
        this.processLong = 10;
        this.processKind = '';
        this.contentLength = 0;
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
            this.Init();
            this.ProcessInputValue();
            this.MakePassword();
        });
    }
    ProcessInputValue() {
        this.processContent = this.content.value.split(/[\s,]+/);
        this.processContent = this.processContent.filter(function (item) {
            return item.trim() !== '';
        });
        this.processContent.forEach((content) => {
            this.contentLength += content.length;
        });
        this.processLong = +this.long.value;
        this.processKind = this.kind.value;
    }
    MakePassword() {
        let result = '';
        if (this.processLong > this.contentLength) {
            let randomStringCount = this.processLong - this.contentLength;
            const insertCount = [];
            for (let i = 0; i < this.processContent.length + 1; i++) {
                if (i === this.processContent.length) {
                    insertCount.push(randomStringCount);
                }
                else {
                    const count = Math.floor(Math.random() * randomStringCount);
                    insertCount.push(count);
                    randomStringCount -= count;
                }
            }
            console.log(insertCount);
            let charset = '';
            if (this.processKind === 'number') {
                charset = '0123456789';
            }
            else if (this.processKind === 'string') {
                charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            }
            else {
                charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            }
            for (let i = 0; i < this.processContent.length + 1; i++) {
                if (insertCount[i] !== 0) {
                    for (let j = 0; j < insertCount[i]; j++) {
                        const randomIndex = Math.floor(Math.random() * charset.length);
                        result += charset.charAt(randomIndex);
                    }
                }
                if (i !== this.processContent.length) {
                    result += this.processContent[i];
                }
            }
        }
        else {
            alert("含めたい文字列の合計の長さが、パスワードの長さを越えています");
        }
        this.password.textContent = result;
    }
    Init() {
        this.contentLength = 0;
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
