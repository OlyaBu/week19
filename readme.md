### Вопросы 💎

1. **Чем отличается класс от объекта? Приведите примеры и того, и другого, отличные от указанных в уроке.**
*класс как  набор функций, а об объект как  набор данных.
Например, класс - динозавры, объект - тиранозавр*

2. **Приведите примеры объектно-ориентированного подхода в реальной жизни.** 
    
    
    ***Отдел кадров** - кол-во отделов(орг структура компании, численность штата, необходимость в кадрах) , сотрдуники( должности, оклад, образование, возраст)
    **Музей** - подразделения ( кол-во отделов,  численность сотрудников, выполнение годдового плана), научная работа ( кол-во и напрвление исследований, статус выполнения работы)*
    
    Приведите примеры объектно-ориентированного подхода в программировании. 
    
    *Трекер привычек ( сделано нет, наименование привычки, общий прогресс)* 
    
    Онлайн кинотеатр ( жанры, режисер, актеры, год, страна)
    **
    
3. **Что такое конструктор? Самостоятельно изучите и напишите, какие бывают виды конструкторов.**

- Функции-конструкторы или просто конструкторы, являются обычными функциями, но существует общепринятое соглашение именовать их с заглавной буквы.
- Функции-конструкторы следует вызывать только с помощью `new`. Такой вызов подразумевает создание пустого `this` в начале и возврат заполненного в конце.

4. **Что выведет код? Почему именно так?**

    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99f30086-db49-4cdf-9cfc-a0b0d4bcba0e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99f30086-db49-4cdf-9cfc-a0b0d4bcba0e/Untitled.png)
    

`ninja
pomidor
 site`

5. **Чем статические свойства и методы отличаются от нестатических? В каких ситуациях они применяются?**

Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к конкретному объекту класса.
Статические методы также используются в классах, относящихся к базам данных, для поиска/сохранения/удаления вхождений в базу данных
6. **Самостоятельно изучите, что такое геттеры и сеттеры, приведите пример класса с их использованием.**

**Для лучшего контроля над свойством его делают приватным, а запись значения осуществляется через специальный метод, который называют *«сеттер»* (setter method).
Для того, чтобы дать возможность внешнему коду узнать значение этого метода, создадим специальную функцию – «геттер» (getter method).**

7. **Что выведет код? Почему именно так?**
`object`
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/278f7897-a155-4744-91f1-d123ad875879/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/278f7897-a155-4744-91f1-d123ad875879/Untitled.png)
    
8. **Что выведет код? Почему именно так?**
`{name: 'Valera', age: 23}`