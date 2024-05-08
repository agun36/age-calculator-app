import './styles.scss'
import ballStar from '../../assets/images/icon-arrow.svg'
import { useTheme } from '../../context/themeContext';

export const SectionLayout = () => {
    const { age } = useTheme();

    return (
        <section>
            <div className="ball" >
                <img src={ballStar} alt="" />
            </div>
            <ul className="mt-5 ">
                <li className='extra-bold'>{age?.years ? <span className='text-Purple-100'>{age.years}</span> : <span className="text-Purple-100">- -</span>}years</li>
                <li className='extra-bold'>{age?.months ? <span className='text-Purple-100'>{age.months}</span> : <span className="text-Purple-100">- -</span>}months</li>
                <li className='extra-bold'>{age?.days ? <span className='text-Purple-100'>{age.days}</span> : <span className="text-Purple-100">- -</span>}days</li>
            </ul>
        </section >
    )
}