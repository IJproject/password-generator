class Generate {

    content: HTMLInputElement
    long: HTMLInputElement
    kind: HTMLSelectElement

    processContent: string[]
    processLong: number
    processKind: string

    password: HTMLParagraphElement

    generate: HTMLButtonElement
    regenerate: HTMLButtonElement
    copy: HTMLButtonElement


    constructor() {
        // 入力要素
        this.content = document.getElementById('content') as HTMLInputElement;
        this.long = document.getElementById('length') as HTMLInputElement;
        this.kind = document.getElementById('kind') as HTMLSelectElement;

        // 加工済みデータ
        this.processContent = []; 
        this.processLong = 0;
        this.processKind = '';

        // 完成したパスワード
        this.password = document.getElementById('password') as HTMLParagraphElement;

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
            this.ProcessInputValue();
            this.MakePassword();
        })
    }


    // 入ってきたデータの加工とバリデーション
    private ProcessInputValue() {
        // 含めたい文字の情報をコンマごとに区切り、配列に代入
        this.processContent = this.content.value.split(/[\s,]+/)
        this.processContent = this.processContent.filter(function(item) {
            return item.trim() !== '';
        });

        this.processLong = +this.long.value
        this.processKind = this.kind.value
    }


    private MakePassword() {
        console.log('make password')
    }


    // 再作成ボタンの挙動
    private ReGenerate() {
        this.regenerate.addEventListener('click', (event: Event) => {
            event.preventDefault();
            this.MakePassword();
        })
    }


    // コピーボタンの挙動
    private Copy() {
        this.copy.addEventListener('click', (event: Event) => {
            event.preventDefault();
            
            const text = this.password.innerText;

            const hiddenTextArea = document.createElement("textarea");
            hiddenTextArea.value = text;

            /* 隠しテキストエリアをDOMに追加 */
            this.password.appendChild(hiddenTextArea);
            /* テキストエリア内のテキストを選択 */
            hiddenTextArea.select();
            /* コピー操作を実行 */
            document.execCommand('copy');
            /* 隠しテキストエリアを削除 */
            this.password.removeChild(hiddenTextArea);

            alert("コピーしました");
        })
    }
}


const generate = new Generate();
