# GraphQL Server

Цель: Написать схему GraphQL для примера веб-приложения e-commerce shop:

до 3 баллов - какие сущности (минимум 3, можно больше), какие у них поля, какие обязательные какие нет;
до 4 баллов - какие запросы/мутации понадобятся (минимум 4, можно больше).
до 5 баллов - развернуть локально graphQL + nodejs или воспользоваться одним из веб-демо (graphqlbin), перенести полностью или частично написанную схему.

Результатом работы будет ссылка на онлайн-демо или репозиторий.

_Для тестирования:_

- получаем всех юзеров

```
  query {
	users {
      id
      name
      email
    }
  }
```

- получаем данные юзера с id: 2

```
  query {
	user(id:2) {
      id
      name
      email
    }
  }
```

- меняем данные юзера

```
  mutation {
	updateUserData(
      id: 2,
      name: "John Doe",
      email: "john-doe@yahoo.com"
    ){
      id
      name
      email
    }
  }
```

- создаем заказ

```
  mutation {
	createOrder(
      userId: 2,
      orderItems: [
        {
          productId: 3,
          quantity: 1,
          price: 345.5
        },
        {
          productId: 4,
          quantity: 2,
          price: 11.3
        },
      	{
          productId: 6,
          quantity: 4,
          price: 5.3
        }
      ]
    ) {
      id
      user {
        id
		name
      }
      items {
        id
        product {
          id
          name
        }
        quantity
        price
      }
      status
    }
  }
```

- меняем статус заказа

```
  mutation {
	changeOrderStatus(
      orderId: 1,
      status: PREPARING
    ) {
      id
      user {
        id
        name
      }
      status
    }
  }
```

- получаем заказы юзера

```
  query{
    orders(userId: 2){
      id
      user {
        id
        name
      }
      status
    }
  }
```
