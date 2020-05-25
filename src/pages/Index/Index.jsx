import React, {Fragment} from 'react';
import styles from './Index.module.css';

const Index = (props => {
    return (
        <Fragment>
        <h1>Full Country Code List</h1>
        <table className={styles.codelist}>
            <tr>
                <th>Country Name</th>
                <th>Currency</th>
                <th>Country Code</th>
            </tr>
            <tr>
                <td>Afghanistan</td>
                <td>Afghani</td>
                <td>AFN</td>
            </tr>
            <tr>
                <td>Albania</td>
                <td>Lek</td>
                <td>ALL</td>
            </tr>
        </table>
        </Fragment>
    )
})

export default Index;