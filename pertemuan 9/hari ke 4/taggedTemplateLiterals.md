# Tagged Template Literal
>"Bentuk yang lebih kompleks dari Template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function." **- MDN Web Docs**

## Penggunaan Lain Tagged Template
* Escaping HTML Tags
```js
function sanitize(strings, ... values) {
    return DOMPurify.sanitize(aboutMe);
}
const name = 'petyr baelish';
const aboutMe = `I Love to do evil "onload= "alert('i hacked you');"`;

const html = sanitize `
    <h3>${nama}</h3>
    <p>${aboutMe}</p>
```
* Translation & Internationalization
```js
const html = i18n `Hallo ${name}, you have ${amount}:c in your bank account.`;
// Hallo Steffen, sie haben US$ 1,250.33 auf Ihrem Bankkonto
```
* Styled Components
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;