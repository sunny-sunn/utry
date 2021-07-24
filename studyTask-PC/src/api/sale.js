import Mock from 'mockjs'
import { orderBy } from '../utils/index'

const sysSale = localStorage.getItem('sys-sale')
const sale = sale ? JSON.parse(sale) : [
  {
    classify:'信用卡',
    money:200,
    date:'2021-07-19',
    target:'张三',
    way:'信用卡',
    people:'李四',
    number:12345,
    remark:'已收钱'
  },
  {
    classify:'预收款',
    money:500,
    date:'2021-06-16',
    target:'王五',
    way:'支票',
    people:'刘梅',
    number:54321,
    remark:'122'
  }
]

// 消费记录列表
Mock.mock('sale/list', 'get', () => ({ result: orderBy(sale) }))

// 添加消费记录
Mock.mock('sale/add', 'post', options => {
  const body = JSON.parse(options.body)
    sale.push({
      ...body
    })
    localStorage.setItem('sys-sale', JSON.stringify(sale))
    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
})

// 编辑消费记录
Mock.mock('sale/edit', 'post', options => {
  const body = JSON.parse(options.body)
  for (let i = 0; i < sale.length; i++) {
    if (sale[i].number === body.number) {
      sale[i] = body
      break
    }
  }
  localStorage.setItem('sys-sale', JSON.stringify(sale))
  return {
    result: {
      err: 0,
      msg: '修改成功！'
    }
  }
})

// 删除消费记录
Mock.mock('sale/remove', 'post', options => {
  const { num } = JSON.parse(options.body)
  let obj = {}
  for (let i = 0; i < sale.length; i++){
    if ( sale[i].number === num ) {
      console.log(i)
      sale.splice(i, 1)
    }
  }
  localStorage.setItem('sys-sale', JSON.stringify(sale))
})
