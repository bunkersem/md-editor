class Editor {

    constructor(containerSelector) {
        this.textStates = [];
        var toolbarItems = [
            'bold',
            'italic',
            'underline',
            'link'
        ]
        this.setup(containerSelector, toolbarItems);
    }



    setup(containerSelector, toolbarItems) {
        var container = document.querySelector(containerSelector);
        var editorParent = this.generateComponent();
        container.appendChild(editorParent);
        toolbarItems.forEach(toolbarItem => {
            var item = editorParent.querySelector('.editor-toolbar .toolbar-item.' + toolbarItem);
            this.textStates[toolbarItem] = {
                active: false,
            }
            item.addEventListener('click', (e) => {
                console.log(toolbarItem, 'click');
                var active = this.textStates[toolbarItem].active = !this.textStates[toolbarItem].active;
                console.log('isactive', active);
                document.execCommand('bold');                
                if (active) {
                    item.classList.add('active');
                }
                else
                    item.classList.remove('active');
            });
        });
        var content = editorParent.querySelector('.editor-content');
        content.addEventListener('keydown', (e) => {
            
            console.log('keydown', e);
        });
    }

    generateComponent() {
        var editorParent = document.createElement('div');
        var html = `
        <div class="editor-container">
            <div class="editor">
                <div class="editor-toolbar">
                    <button class="toolbar-item bold">
                        <span class="fa fa-1x fa-bold"></span>
                    </button>
                    <button class="toolbar-item italic">
                        <span class="fa fa-1x fa-italic"></span>
                    </button>
                    <button class="toolbar-item underline">
                        <span class="fa fa-1x fa-underline"></span>
                    </button>
                    <button class="toolbar-item link">
                        <span class="fa fa-1x fa-link"></span>
                    </button>
                </div>
                <div class="editor-content" contenteditable="true">

                </div>
            </div>
        </div>
        `;
        editorParent.innerHTML = html;
        return editorParent;        
    }
}


