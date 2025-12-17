// import { useEffect, useState } from 'react'
// import './App.css'

// export function App() {
//   console.log('in')
//   const [tracks, setTracks] = useState(null)
//   const [selectedTrackId, setSelectedTrackId] = useState(null)
//   const [selectedTrack, setSelectedTrack] = useState(null)

//   useEffect(() => {
//     console.log('aaa')
//     // fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
//     //   headers: {
//     //     'api-key': 'c4861782-c134-481a-b40f-7bb6bb980150'
//     //   }
//     // }).then(res => res.json()).then(json => {
//     //   setTracks(json.data)
//     // })
//   }, [])

//   useEffect(() => {
//     if (!selectedTrackId) {
//       return
//     }
//     // fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
//     //   headers: {
//     //     'api-key': 'c4861782-c134-481a-b40f-7bb6bb980150'
//     //   }
//     // }).then(res => res.json()).then(json => {
//     //   setSelectedTrack(json.data)
//     // })
//   }, [selectedTrackId])

//   if (tracks === null) {
//     return (
//       <>
//         <h1>Media Player</h1>
//         <div>Loading...</div>
//       </>
//     )
//   }

//   if (tracks.length === 0) {
//     return (
//       <>
//         <h1>Media Player</h1>
//         <div>No tracks</div>
//       </>
//     )
//   }

//   return (
//     <>
//       <h1>Media Player</h1>
//       <button onClick={() => {
//         setSelectedTrackId(null)
//         setSelectedTrack(null)
//       }}>Reset selection</button>
//       <div style={{
//         display: 'flex',
//         gap: 30
//       }}>
//         <ul>
//           {tracks.map((track) => {
//             return (
//               <li key={track.id} style={{
//                 border: selectedTrackId === track.id ? '1px solid red' : 'none'
//               }}>
//                 <div onClick={() => {
//                   setSelectedTrackId(track.id)
//                 }}>{track.attributes.title}</div>
//                 <audio src={track.attributes.attachments[0].url} controls />
//               </li>
//             )
//           })}
//         </ul>
//         <div>
//           <h2>Details</h2>
//           <div>
//             {(selectedTrack?.id !== selectedTrackId) && selectedTrackId ? 'Loading...' : (
//               <>
//                 <h3>{selectedTrack === null ? 'Track isn\'t selected' : selectedTrack.attributes.title}</h3>
//                 <h4>Lyrics</h4>
//                 <p>{selectedTrack?.attributes?.lyrics ? selectedTrack.attributes.lyrics : 'No lyrics'}</p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
