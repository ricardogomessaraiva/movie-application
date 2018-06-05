import { Injectable } from '@angular/core'


import { Movie } from './model/movie.model'

@Injectable()
export class MoviesService {
  movies: Movie[] = [
    {
      id: 1,
      name: 'Advogado do Diabo',
      sinopse: 'Kevin Lomax, advogado de uma pequena cidade da Flórida que nunca perdeu um caso, é contratado por John Milton, dono da maior firma de advocacia de Nova York. No início tudo parece correr bem, mas Mary Ann, a esposa do advogado, começa a testemunhar aparições demoníacas. Kevin está empenhado em defender um cliente e cada vez dá menos atenção sua mulher enquanto seu misterioso chefe parece sempre saber como contornar cada problema e tudo que perturba o jovem advogado.',
      category: 'Suspense',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/advogado-diabo.jpg',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 4,
      name: 'À procura da felicidade',
      sinopse: 'Chris Gardner enfrenta uma vida difícil. Despejado de seu apartamento, este pai solteiro e seu filho não têm onde morar. Chris consegue um estágio não remunerado em uma firma de prestígio. Sem dinheiro, os dois são obrigados a viver em abrigos, mas Chris está determinado a criar um vida melhor para ele e seu filho.',
      category: 'Drama',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/procura_da_felicidade.jpeg',
      createdAt: '23-05-2017 15:12'
    }
    , {
      id: 5,
      name: 'Ilha do Medo',
      sinopse: 'Na década de 50, a fuga de uma assassina leva o detetive Teddy Daniels e seu parceiro a investigarem o seu desaparecimento de um quarto trancado em um hospital psiquiátrico. Lá, uma rebelião se inicia e o agente terá que enfrentar seus próprios medos.',
      category: 'Suspense',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/ilha-do-medo.jpeg',
      createdAt: '23-05-2017 15:12'
    }
    , {
      id: 7,
      name: 'Dia de treinamento',
      sinopse: 'Jake Hoyt, um jovem policial de Los Angeles, entra para a equipe de narcóticos da polícia e recebe como oficial de treinamento e parcerio Alonzo Harris, um policial veterano e corrupto. Com o passar do dia, o jovem é exposto a todo tipo de corrupção e é ainda acusado de assassinato, acontecimentos que são orquestrados por Alonzo a fim de encobrir um engano cometido por ele junto à máfia russa, que pode fazer com que ele seja morto se não conseguir uma grande quantia de dinheiro até a meia-noite.',
      category: 'Terror',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/training-day.jpg',
      createdAt: '23-05-2017 15:12'
    }
    , {
      id: 7,
      name: 'Exterminador do futuro',
      sinopse: 'Disfarçado de humano, o assassino conhecido como o Exterminador (Arnold Schwarzenegger) viaja de 2029 a 1984 para matar Sarah Connor (Linda Hamilton). Enviado para proteger Sarah está Kyle Reese (Michael Biehn), que divulga a chegada do Skynet, um sistema de inteligência artificial que detonará um holocausto nuclear. Sarah é o alvo porque a Skynet sabe que seu futuro filho comandará a luta contra eles. Com o implacável Exterminador os perseguindo, Sarah e Kyle tentam sobreviver.',
      category: 'Terror',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/terminator.jpg',
      createdAt: '23-05-2017 15:12'
    },
    {
      id: 2,
      name: 'Matrix',
      sinopse: 'Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.',
      category: 'Ação',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/matrix.jpg',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 6,
      name: 'A Hora do pesadelo',
      sinopse: 'Freddy Krueger foi queimado vivo e agora está de volta com desejo de vingança. O homem deformado com garras de aço ataca um grupo de adolescentes em seus pesadelos e, para escapar, suas vítimas precisam acordar.',
      category: 'Terror',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/hora-pesadelo.jpg',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 7,
      name: 'Django Livre',
      sinopse: 'No sul dos Estados Unidos, anos antes da Guerra Civil, um ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participarem de competições mortais.',
      category: 'Terror',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/django-livre.png',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 8,
      name: 'Harry Potter - Enigma do Princípe',
      sinopse: 'Os Comensais da Morte estão empolgados com a volta de Voldemort e atacam o mundo dos trouxas e dos bruxos. Dumbledore chama seu amigo Horácio Slughorn para ajudá-lo na preparação de Harry Potter. Harry se vê cada vez mais interessado em Gina, e Hermione morre de ciúmes de Ron, mas prefere não dizer nada.',
      category: 'Terror',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/harry-potter.jpg',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 8,
      name: 'Senhor dos Anéis',
      sinopse: 'Um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal, pois o futuro da civilização depende do destino desse anel. Para isso, o hobbit Frodo terá um caminho árduo pela frente. Ao seu lado, para o cumprimento desta jornada, ele poderá contar com outros hobbits.',
      category: 'Terror',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/senhor-aneis.jpg',
      createdAt: '23-05-2017 15:12'
    }
    , {
      id: 4,
      name: 'Hannibal',
      sinopse: 'Sete anos se passaram desde que Dr. Hannibal Lecter escapou da prisão. O brilhante mas perigosíssimo psiquiatra agora está solto pela Europa. Mason Verger se lembra bem do seu contato com Dr. Lecter, pois foi sua sexta vítima. Embora horrivelmente desfigurado, sobreviveu, e agora busca vingança. Verger percebe que, para encontrar Lecter, precisa despertar o interesse dele com uma isca: a agente do FBI Clarice Starling.',
      category: 'Ficção',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/hannibal.jpg',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 4,
      name: 'Constantine',
      sinopse: 'Contos sobrenaturais baseados nas histórias em quadrinhos "Hellblazer". O solitário Constantine tenta garantir seu lugar no paraíso enviando demônios de volta ao inferno, mas seu destino está ligado ao de Angela, uma policial que investiga o suposto suicídio de sua irmã gêmea.',
      category: 'Ficção',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/imagens-john-constantine.jpg',
      createdAt: '23-05-2017 15:12'
    }, {
      id: 3,
      name: 'E.T. - O Extraterrestre',
      sinopse: 'O garoto Elliott faz amizade com um pequeno alienígena inofensivo que está bem longe do seu planeta. Ele decide manter a adorável criatura em segredo e em casa após apresentá-la aos irmãos.',
      category: 'Suspense',
      createdBy: 'Ricardo G. Saraiva',
      imagePath: '../../assets/images/ET.jpg',
      createdAt: '23-05-2017 15:12'
    }
  ]

  movie: Movie
  constructor() { }

  all(): Movie[] {
    return this.movies;
  }  
}