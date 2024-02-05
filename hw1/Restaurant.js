// Повара и их специализации
const chefsSpecialization = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
  ]);
  
  // Блюда и их повара
  const dishesAndChefs = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
  ]);
  
  // Заказы клиентов
  const orders = new Map();
  
  // Заказы клиента Алексей
  const alexeyOrder = new Map([
    ['Пицца "Пепперони"', 1],
    ['Тирамису', 1]
  ]);
  orders.set({ name: 'Алексей' }, alexeyOrder);
  
  // Заказы клиента Мария
  const mariaOrder = new Map([
    ['Суши "Калифорния"', 1],
    ['Пицца "Маргарита"', 1]
  ]);
  orders.set({ name: 'Мария' }, mariaOrder);
  
  // Заказы клиента Ирина
  const irinaOrder = new Map([
    ['Чизкейк', 1]
  ]);
  orders.set({ name: 'Ирина' }, irinaOrder);
  
  // Выводим информацию о каждом заказе
  orders.forEach((order, client) => {
    console.log(`${client.name} заказал(а):`);
    order.forEach((quantity, dish) => {
      const chef = dishesAndChefs.get(dish);
      console.log(`  ${dish} (${chefsSpecialization.get(chef)}) - Повар: ${chef}`);
    });
    console.log();
  });
  