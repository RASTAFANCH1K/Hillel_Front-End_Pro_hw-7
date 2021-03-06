// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// ЗАДАНИЕ №1
// Создать обьект car со следующими свойствами model - 'Mercedes', price - '60000', type - 'sedan', year - 2019, quantity - 4 
// Написать функцию которая будет принимать обьект вычитать 2 с поля quantity и возвращать price*quantity !!!
// РЕШЕНИЕ

const car = {
  model: "Mersedes",
  price: 60000,
  type: "sedan",
  year: 2019,
  quantity: 4,
}

function getPrice({price, quantity}) {
  return price * (quantity - 2);
}

let result = getPrice(car);
console.log(result);

// ЗАДАНИЕ №2
// Написать функцию которая принимает обьект bicycle с полями model: 'CORSO 26', price: 10000,
// и возвращает новый обьект который содержит свойства обьекта bicycle и свойство bought: true
// РЕШЕНИЕ

let bicycle = {
  model: "CORSO 26",
  price: 10000,
}

function getBicycle({model, price}) {
  return {
    model,
    price,
    bought: true
  }
}

let result = getBicycle(bicycle)
console.log(result);

// ЗАДАНИЕ №3
// Дан обьект! Избавиться от вложености то есть поднять верх поля component children а content убрать!
// РЕШЕНИЕ

let impScreen = {
  name: "Impressum",
  uuid: "0cc57361-9c7d-4f08-a6d9-c254f3516e7d",
  content: {
    component: "page",
    children: [
      {
        type: "rich_text",
        data: {
            _uid: "f6c0525c-7b90-4b64-8166-de0524f53aec",
            content: "*Hello*, this is the **first** text!\n\nThis is a [link](https://google.com)",
            customClass: ""
        }
      },
      {
        type: "info_text",
        data: {
          _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
          content: "Und hier kommt noch ein Absatz für Christian!",
          customClass: ""
        }
      },
      {
        type: "rich_text",
        data: {
          _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
          content: "Absatz für Christian!",
          customClass: ""
        }
      },
      {
        type: "image",
        data: {
          _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
          content: "Christian!",
          customClass: ""
        }
      }
    ]
  }
};

impScreen = { 
  ...impScreen,
  ...impScreen.content
}

delete impScreen.content;
console.log(impScreen);

// ЗАДАНИЕ №4
// Есть обьект! засунуть name, content в отдельные переменные с помощью деструктуризации
// РЕШЕНИЕ

const obj = {
  name: "Impressum",
  uuid: "0cc57361-9c7d-4f08-a6d9-c254f3516e7d",
  content: {
    component: "page"
  }
};

let {name, content, ...rest} = obj;

let newObj = {
  variableOne: { name },
  rest,
  variableTwo: { content },
}

console.log(newObj);

// ЗАДАНИЕ №5
// Используя  обьект который лежит в переменной impScreen выше отфильтровать массив в поле children по полю type
// чтобы остались только те у которых значение rich_text
// РЕШЕНИЕ

let impScreen = {
  name: "Impressum",
  uuid: "0cc57361-9c7d-4f08-a6d9-c254f3516e7d",
  content: {
    component: "page",
    children: [
      {
        type: "rich_text",
        data: {
            _uid: "f6c0525c-7b90-4b64-8166-de0524f53aec",
            content: "*Hello*, this is the **first** text!\n\nThis is a [link](https://google.com)",
            customClass: ""
        }
      },
      {
        type: "info_text",
        data: {
          _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
          content: "Und hier kommt noch ein Absatz für Christian!",
          customClass: ""
        }
      },
      {
        type: "rich_text",
        data: {
          _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
          content: "Absatz für Christian!",
          customClass: ""
        }
      },
      {
        type: "image",
        data: {
          _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
          content: "Christian!",
          customClass: ""
        }
      }
    ]
  }
};

let res = impScreen.content.children.filter(el => el.type === "rich_text");

console.log(res);

// ЗАДАНИЕ №6
// Записать в новую переменную только те обьекты у которых gender - m и age > 18. Filter отличное решение
// РЕШЕНИЕ

const dataExample = [{
  name: 'John Doe',
  gender: 'm',
  age: 27,
}, {
  name: 'Harvey Cox',
  gender: 'm',
  age: 16,
}, {
  name: 'Nathan Dixon',
  gender: 'm',
  age: 23,
}, {
  name: 'Lily Wyatt',
  gender: 'f',
  age: 28,
}, {
  name: 'Morgan Lawson',
  gender: 'm',
  age: 50,
}, {
  name: 'Lilly Blackburn',
  gender: 'f',
  age: 41,
}, {
  name: 'Kate Sanderson',
  gender: 'f',
  age: 62,
}, {
  name: 'Reece Howard',
  gender: 'm',
  age: 31,
}, {
  name: 'Adam Doherty',
  gender: 'm',
  age: 52,
}, {
  name: 'Eloise Wallace',
  gender: 'f',
  age: 24,
}, {
  name: 'Luke Nolan',
  gender: 'm',
  age: 69,
}];

let res = dataExample.filter(el => el.age > 18 && el.gender === "m");

console.log(res);