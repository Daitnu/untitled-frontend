export class CustomTextEditor {
  el: HTMLInputElement;

  constructor(props) {
    const el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;

    el.type = 'text';
    el.maxLength = maxLength;
    el.value = String(props.value);

    el.addEventListener('keydown', (event) => {
      const pressKey = event.key;

      if (Number.isInteger(Number(pressKey))) {
        return true;
      } else if (pressKey === 'Backspace') {
        return true;
      }
      event.preventDefault();
    });

    el.addEventListener('focusout', (event) => {
      console.log('enter !!', this.getValue());
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
