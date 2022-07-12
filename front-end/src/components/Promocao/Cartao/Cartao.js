import React from 'react';
import './Cartao.scss';

const PromocaoCartao = ({ ...props }) => {
    return (
        <div className='promocao-cartao'>
            <img src={props.promocao.imageUrl} alt={props.promocao.title} className='promocao-cartao__imagem' />
            <div className='promocao-cartao__info'>
                <h1 className='promocao-cartao__title'>{props.promocao.title}</h1>
                <span className='promocao-cartao__price'>R$ {props.promocao.price}</span>
                <footer className='promocao-cartao__footer'>
                    {props.promocao.comments.length > 0 && (
                        <div className='promocao-cartao__comentario'>{props.promocao.comments[0].comment}</div>
                    )}
                    <div className='promocao-cartao__comentario-count'>{props.promocao.comments.length}{' '}
                        {props.promocao.comments.length > 1 ? 'Comentários' : ' Comentário '}
                    </div>
                    <a href={props.promocao.url} target='blank' className='promocao-cartao__link' >IR PARA O SITE</a>
                </footer>
            </div>
        </div>
    );
}
export default PromocaoCartao