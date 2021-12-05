# untitled-frontend

## 파일명명규칙

| Style                 | Category         |
| --------------------- | ---------------- |
| UpperCamelCase        | class / React.FC |
| lowerCamelCase        | everything else  |
| snake_case            | never used       |
| dash-case(kebab-case) | never used       |

<br />

## 명명규칙

| Style          | Category                                                           |
| -------------- | ------------------------------------------------------------------ |
| UpperCamelCase | class / interface / type / enum / decorator / type parameters      |
| lowerCamelCase | variable / parameter / function / method / property / module alias |
| CONSTANT_CASE  | global constant values, including enum values                      |
| #ident         | private identifiers are never used.                                |

<br />

## Use Extra Commas

```ts
const [a, , b] = [1, 5, 10]; // a <- 1, b <- 10
```

<br />

## No #private fields

Do not use private fields (also known as private identifiers):

```ts
// BAD
class Clazz {
  #ident = 1;
}

//GOOD
class Clazz {
  private ident = 1;
}
```
