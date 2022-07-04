import Item from './Item'

const arr = ["註冊帳號","忘記密碼"]

const Function = () => {
    return <div className='list'>
        {
        arr.map(item => <button className='remove'>{item}</button>)
        }
    </div>
}

export default Function