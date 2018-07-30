import React, { Component } from 'react';
import './App.css';
import * as R from 'ramda';
import classNames from 'classnames';
import BbMajorScale from './Bb-major-scale.m4a';
import BbPentaScale from './Bb-penta-scale.m4a';
import BbBluesScale from './Bb-blues-scale.m4a';

const major = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
const penta = ['Bb', 'Db', 'Eb', 'F', 'Ab'];
const blues = ['Bb', 'Db', 'Eb', 'E', 'F', 'Ab'];
const harmonic = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const functions = ['1', null, '2', '3m', '3M', '4', null, '5', null, '6', '7m', '7M', '1'];

const noteFunction = (i) => {
    return R.nth(i, functions);
};

const Scale = ({ scale, highlights = [] }) => {
    const [before, after] = R.splitWhen(R.equals(R.head(scale)), harmonic);
    const notes = R.concat(R.concat(after, before), [R.head(scale)]);

    return (
        <div className='scale'>
            {notes.map((note, i) => (
                <div key={i}>
                    <div className='noteFunction'>{noteFunction(i)}</div>
                    <div
                        className={classNames(
                            'note',
                            { inScale: R.contains(note, scale),
                              highlighted: R.contains(note, highlights),
                            }
                        )}
                    >
                        {note}
                    </div>
                </div>
            ))}
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <div>
                <h1>I got rhythm</h1>
                <h2>Gamme majeure</h2>
                <p>
                    La première partie du thème (le A) utilise uniquement les notes de la
                    gamme majeure de Si bémol (noté Bb en anglais).
                </p>
                <p>
                    Ci-dessous on voit les notes qui composent la gamme, ainsi que la "fonction"
                    de chacune des notes dans la gamme (1 c'est la fondamentale, 2 la seconde, 3
                    la tierce etc.). Le "m/M" indique si c'est majeur ou mineur, on voit que seules
                    la tierce ou la 7ème peuvent être majeure ou mineure, les autres sont "justes".
                </p>
                <Scale scale={major} />
                <audio src={BbMajorScale} controls />
                <h2>Le thème</h2>
                <p>
                    Là j'ai simplement surligné les notes utilisées sur le thème.
                </p>
                <Scale scale={major} highlights={['Bb', 'C', 'F', 'G', 'D']} />
                <h2>Gamme pentatonique mineure</h2>
                <p>
                    Pour certaines des variations, Sara Vaughan utilise la gamme pentatonique
                    mineure.
                </p>
                <p>
                    Les deux différences avec la gamme majeure sont
                </p>
                <ul>
                    <li>Pas de seconde ni de sixième (penta = 5 notes)</li>
                    <li>La tierce et la septième sont mineures</li>
                </ul>
                <Scale scale={penta} />
                <audio src={BbPentaScale} controls />
                <h2>Gamme blues</h2>
                <p>
                    En réalité Sara Vaughan utilise la gamme "blues" et pas la pentatonique mineure.
                </p>
                <p>
                    C'est simplement la gamme pentatonique mineure avec en plus ce qu'on appelle la
                    "note blues", ici c'est un Mi.
                </p>
                <Scale scale={blues} highlights={['E']} />
                <audio src={BbBluesScale} controls />
                <h2>Exercices</h2>
                <em>Note : ne passer à l'exercice suivant que lorsqu'on est à l'aise sur le précédent.</em>
                <h3>1. Écouter</h3>
                <em>Niveau : facile</em>
                <p>
                    Pour commencer, bien écouter les enregistrements, et les chanter en même temps.
                    Ça permet de se mettre les gammes dans l'oreille.
                </p>
                <h3>2. Reproduire</h3>
                <em>Niveau : intermédiaire</em>
                <p>
                    Jouer la première note de l'enregistrement, puis mettre pause, réciter la gamme,
                    puis vérifier avec l'enregistrement.
                </p>
                <h3>2. Arpèger</h3>
                <em>Niveau : intermédiaire</em>
                <p>
                    Un arpège est une suite de note qui forme un accord. Les accords les plus simples
                    sont appelé des "triades", et sont formé de trois notes de la gamme (on se concentre
                    uniquement sur la gamme majeure ici) : fondamentale, tierce et quinte (1 3M 5 sur les
                    diagrammes).
                </p>
                <p>
                    En regardant les fonctions des notes de la gamme de Si bémol majeure, on peut
                    retrouver l'accord (triade) de Si bémol.
                </p>
                <p>
                    L'exercice consiste à retrouver l'arpège de Si bémol à partir de la gamme majeure.
                </p>
                <em>
                    Note : sur une de ses variations sur le thème, Sara Vaughan utilise l'arpège
                    de Si bémol majeur.
                </em>
                <h3>3. Transposer</h3>
                <em>Niveau : difficile</em>
                <p>
                    Un bon exercice pour s'assurer qu'on a bien les gammes en tête, c'est de les transposer.
                    Partir de n'importe quelle note (par exemple Fa) et réciter la gamme de Fa majeur.
                </p>
                <p>
                    Ça sert à s'assurer qu'on a bien assimilé les intervalles de la gamme, et pas juste
                    appris la gamme de Si bémol par coeur.
                </p>
                <h3>Improviser</h3>
                <em>Niveau : très difficile</em>
                <p>
                    Une fois la gamme bien en tête, on peut essayer de jouer avec. La réciter en partant
                    d'une autre note que la fondamentale, ou bien en sautant certaines notes de la gamme,
                    en alternant montées et descentes, pour former des petites phrases.
                </p>
            </div>
        );
    }
}

export default App;
