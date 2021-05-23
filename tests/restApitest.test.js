// тест с использованием библиотеки мокка для проверки рест апи


const assert = require('assert')// библиотека утверждений
const fetch = require("node-fetch")// запросы

let response
let responseJson

describe('Restapi test',()=>{
 before(async ()=> {
response = await fetch(
    "http://dummy.restapiexample.com/api/v1/employees",// запрос по урл
    {method:'GET'}// обязатель пишем какой метод гет пут пост итд
)
responseJson = await response.json()
 })// before что должно произойти до начало выполнения теста   
 
 it('количество работников равно 24',()=>{
    let employeesNumder = responseJson.data.length
    assert.equal(employeesNumder,24)//  equal сравниваем 1 параметр с 2 
 })//it это описания самого теста


}) // describe - конструкция для выполнения тестов первый параметр имя второй колбек

