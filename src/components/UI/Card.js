import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './Card.scss';

const CardComponent = (props) => {

    return (
        <Card sx={{ minWidth: 275 }} className='collab-card-content'>
            {props.children}
            {props.btnName && (
                <CardActions>
                    <Button size="small" onClick={props.onBtnClick}>{props.btnName}</Button>
                </CardActions>
            )}
        </Card>
    )

}

export default CardComponent;