import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated as anim } from 'react-spring'
import './styles.css'

const fast = { tension: 1200, friction: 50 }
const mid = { mass: 5, tension: 400, friction: 50 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Goo() {
  // Here we form a natural trail, one spring following another.
  // You can either update springs by overwriting values when you re-render the component.
  // Or you can use the set function, which allows you to bypass React alltogether.
  // We're dealing with mouse-input here so we choose the latter in order to prevent rendering.
  const [{ pos1 }, set] = useSpring({
    pos1: [window.innerWidth / 2, window.innerHeight / 2],
    config: fast
  })
  const [{ pos2 }] = useSpring({ pos2: pos1, config: slow })
  const [{ pos3 }] = useSpring({ pos3: pos2, config: slow })
  const [{ pos4 }] = useSpring({ pos4: pos1, config: mid })
  // Effect for fetching mouse coordinates
  useEffect(() => {
    // "set" updates the first spring, the other springs are bound and will follow.
    // It won't cause a new render pass and the animated values down in the view
    // will still naturally reflect animated changes.
    const handler = ({ clientX, clientY }) => set({ pos1: [clientX, clientY] })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [set])
  // We render the view like always, but we're using animated.el whereever
  // animated values are being used. Just like with regular "native" springs this
  // makes elements transient.
  return (
    <>
      {/* <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
          <feBlend in="SourceGraphic" mode="difference" />
        </filter>
      </svg> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper. Quis
        varius quam quisque id diam vel quam elementum. Ac odio tempor orci dapibus. Sed odio morbi
        quis commodo odio. Urna neque viverra justo nec ultrices dui sapien eget mi. Pulvinar
        pellentesque habitant morbi tristique senectus et netus. In pellentesque massa placerat duis
        ultricies lacus sed turpis. Etiam tempor orci eu lobortis elementum nibh. Aenean pharetra
        magna ac placerat vestibulum. Pretium quam vulputate dignissim suspendisse in est ante in.
        Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Ultrices in iaculis nunc sed augue.
        Enim tortor at auctor urna nunc. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
        Cursus eget nunc scelerisque viverra mauris. Viverra aliquet eget sit amet tellus. Vel quam
        elementum pulvinar etiam non quam lacus. Semper auctor neque vitae tempus. Interdum velit
        laoreet id donec ultrices.
      </p>
      <p>
        Aliquam etiam erat velit scelerisque in dictum. Sed elementum tempus egestas sed sed risus
        pretium quam. Tellus integer feugiat scelerisque varius morbi enim nunc. Tortor consequat id
        porta nibh venenatis. Ac orci phasellus egestas tellus rutrum tellus. Quis viverra nibh cras
        pulvinar mattis nunc. Mattis molestie a iaculis at erat pellentesque. Tellus elementum
        sagittis vitae et leo duis ut diam quam. Porttitor leo a diam sollicitudin tempor id eu.
        Mauris in aliquam sem fringilla ut morbi tincidunt augue. Volutpat odio facilisis mauris sit
        amet. Lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet consectetur adipiscing
        elit. Amet risus nullam eget felis. Eu non diam phasellus vestibulum lorem sed risus. Netus
        et malesuada fames ac turpis egestas. Ultrices mi tempus imperdiet nulla malesuada
        pellentesque elit eget.
      </p>
      <p>
        Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Imperdiet sed euismod nisi
        porta lorem mollis aliquam ut. Feugiat in fermentum posuere urna. Vestibulum rhoncus est
        pellentesque elit ullamcorper dignissim. Feugiat in ante metus dictum at tempor commodo.
        Ipsum faucibus vitae aliquet nec ullamcorper sit. Posuere sollicitudin aliquam ultrices
        sagittis orci. Volutpat odio facilisis mauris sit amet massa. Turpis nunc eget lorem dolor
        sed viverra ipsum nunc. Tristique senectus et netus et malesuada fames ac. Lectus arcu
        bibendum at varius vel pharetra vel.
      </p>
      <p>
        Tortor pretium viverra suspendisse potenti nullam ac tortor. Maecenas sed enim ut sem
        viverra aliquet eget sit amet. Leo urna molestie at elementum eu facilisis sed. In ante
        metus dictum at tempor. Leo integer malesuada nunc vel risus commodo viverra maecenas. Vel
        orci porta non pulvinar. In fermentum posuere urna nec tincidunt. Purus in massa tempor nec
        feugiat nisl pretium. Non arcu risus quis varius quam quisque. Est pellentesque elit
        ullamcorper dignissim cras tincidunt lobortis. Hac habitasse platea dictumst vestibulum
        rhoncus est pellentesque. Venenatis a condimentum vitae sapien pellentesque habitant morbi
        tristique. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. In eu mi bibendum
        neque egestas congue. In aliquam sem fringilla ut.
      </p>
      <p>
        Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Faucibus purus in
        massa tempor nec feugiat. Nibh cras pulvinar mattis nunc. Dui accumsan sit amet nulla
        facilisi. Curabitur gravida arcu ac tortor dignissim. Et leo duis ut diam quam nulla. Sed
        libero enim sed faucibus turpis in eu mi bibendum. Risus ultricies tristique nulla aliquet
        enim tortor at. Vitae congue mauris rhoncus aenean vel elit. Ut tortor pretium viverra
        suspendisse potenti nullam ac tortor vitae.
      </p>
      <div className="hooks-main">
        <div className="hooks-filter">
          <anim.div className="b1" style={{ transform: pos3.interpolate(trans) }} />
          <anim.div className="b2" style={{ transform: pos2.interpolate(trans) }} />
          <anim.div className="b3" style={{ transform: pos1.interpolate(trans) }} />
          <anim.div className="b3" style={{ transform: pos4.interpolate(trans) }} />
        </div>
      </div>
    </>
  )
}

ReactDOM.render(<Goo />, document.getElementById('root'))
