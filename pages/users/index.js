import Layout from '../../components/Layout/Layout';
import Styles from './Users.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {users : data }
    }
}

const Users = ({users}) => {
return (
    <>
    <Layout>
    <div>
        <h1 className={Styles['header-text']}>All Users</h1>
        {
            users.map(user => (
                <div key={user.id}>
                    <a className={Styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </div>
            ))
        }
    </div>
    </Layout>
    </>
)
}

export default Users;