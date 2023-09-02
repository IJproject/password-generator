class Generate {

    content: HTMLInputElement
    long: HTMLInputElement
    kind: HTMLSelectElement

    generate: HTMLButtonElement
    regenerate: HTMLButtonElement
    copy: HTMLButtonElement

    constructor() {
        // 入力要素
        this.content = document.getElementById('content') as HTMLInputElement;
        this.long = document.getElementById('length') as HTMLInputElement;
        this.kind = document.getElementById('kind') as HTMLSelectElement;

        // ボタン
        this.generate = document.getElementById('generate') as HTMLButtonElement;
        this.regenerate = document.getElementById('re-generate') as HTMLButtonElement;
        this.copy = document.getElementById('copy') as HTMLButtonElement;

        // 各ボタンのイベントを追加
        this.Generate();
        this.ReGenerate();
        this.Copy();
    }

    // 作成ボタンの挙動
    private Generate() {
        this.generate.addEventListener('click', (event: Event) => {
            event.preventDefault();
            
        })
    }

    // 再作成ボタンの挙動
    private ReGenerate() {
        this.regenerate.addEventListener('click', (event: Event) => {
            event.preventDefault();
        })
    }

    // コピーボタンの挙動
    private Copy() {
        this.copy.addEventListener('click', (event: Event) => {
            event.preventDefault();
        })
    }
}

const generate = new Generate();

// setInterval(() => {
//     console.log(getInput.content.value)
// }, 1000)