export class CustomTextEditor {
  el: HTMLInputElement;

  constructor(props) {
    const el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;

    console.log('columns ', props.rows);

    el.type = 'text';
    el.maxLength = maxLength;
    el.value = String(props.value);

    el.addEventListener('keydown', (event) => {
      const pressKey = event.key;

      if (Number.isInteger(Number(pressKey)) || pressKey === '-') {
        return true;
      } else if (pressKey === 'Backspace') {
        return true;
      }
      event.preventDefault();
    });

    this.el = el;
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
  }
}
