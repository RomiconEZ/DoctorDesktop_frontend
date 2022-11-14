import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
const CardDoctor =() =>{
   const location = useLocation()
    const {doctor} = location.state
    return(
        <div>
        <div >
            <div>
                <span>Фамилия Имя Отчество</span>
                <span>{doctor.surname + ' ' + doctor.name + ' ' + doctor.patronymic} </span>
            </div>
            <div>
                <span>Дата рождения</span>
                <span >{doctor.birthday} </span>
            </div>
            <div>
                <span>Возраст</span>
                <span>{doctor.age} </span>
            </div>
            <div>
                <span >Должность</span>
                <span>{doctor.post} </span>
            </div>
            <div>
                <span>Пользовательский режим</span>
                <span>{doctor.role} </span>
            </div>
            <div>
                <span>Стаж работы</span>
                <span>{doctor.experience}{doctor.experience<=4 ? 'года' : 'лет'}  </span>
            </div>
            <div>
                <span>Регион</span>
                <span>{doctor.region} </span>
            </div>
            <div>
                <span>Учереждение</span>
                <span>{doctor.clinic} </span>
            </div>
            <div>
                <span>Профиль</span>
                <span>{doctor.profiled} </span>
            </div>
        </div>
            <Link to={`/editcard/${doctor.id}`} state={{doctor}}><button>Редактировать</button></Link>
        </div>
    )
}
export default CardDoctor