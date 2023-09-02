class Generate {

    content: HTMLInputElement
    long: HTMLInputElement
    kind: HTMLSelectElement

    processContent: string[]
    processLong: number
    processKind: string

    contentLength: number

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
        this.processLong = 10;
        this.processKind = '';

        // 指定した文字列の長さ
        this.contentLength = 0;

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
            this.Init();
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
        // 指定した文字列の合計文字数
        this.processContent.forEach((content) => {
            this.contentLength += content.length
        })

        this.processLong = +this.long.value
        this.processKind = this.kind.value

    }


    private MakePassword() {
        let result: string = ''
        if(this.processLong > this.contentLength) {
            // ランダムな文字列の合計の長さ
            let randomStringCount: number = this.processLong - this.contentLength;
            // 挿入箇所ごとの文字列の長さ
            const insertCount: number[] = []
            // どこに何文字入れるかを決定
            for(let i = 0; i < this.processContent.length + 1; i++) {
                if(i === this.processContent.length) {
                    insertCount.push(randomStringCount)
                } else {
                    const count = Math.floor( Math.random() * randomStringCount )
                    insertCount.push(count)
                    randomStringCount -= count 
                }
            }
            console.log(insertCount)
            // パスワードの生成
            let charset: string = '';
            if(this.processKind === 'number') {
                charset = '0123456789'
            } else if(this.processKind === 'string') {
                charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            } else {
                charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            }
            for (let i = 0; i < this.processContent.length + 1; i++) {
                if(insertCount[i] !== 0) {
                    for(let j = 0; j < insertCount[i]; j++) {
                        const randomIndex = Math.floor(Math.random() * charset.length);
                        result += charset.charAt(randomIndex);
                    }
                }
                if(i !== this.processContent.length) {
                    result += this.processContent[i]
                }
            }          
        } else {
            alert("含めたい文字列の合計の長さが、パスワードの長さを越えています")
        }
        this.password.textContent = result
    }

    private Init() {
        this.contentLength = 0
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