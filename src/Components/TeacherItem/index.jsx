import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt="" />
                <div>
                    <strong>Pedro Dalpa</strong>
                    <span>SLa man</span>
                </div>
            </header>
            <p>
                sashjnasajsnajsnhajsnhasjnhajsknaskj
                        <br /><br />
                        sahguagduygsduysagduysaduysgduysagduygduysagdusadg

                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 0,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;