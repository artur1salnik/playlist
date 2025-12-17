import { useTrackDetail } from "../bll/useTrackDetail"

type Props = {
  selectedTrackId: string | null
}

export function TrackDetail(props: Props) {
  const selectedTrackId = props.selectedTrackId

  const { selectedTrack } = useTrackDetail(selectedTrackId)


  return <div>
    <h2>Details</h2>
    <div>
      {(selectedTrack?.id !== selectedTrackId) && selectedTrackId ? 'Loading...' : (
        <>
          <h3>{selectedTrack === null ? 'Track isn\'t selected' : selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack?.attributes?.lyrics ? selectedTrack.attributes.lyrics : 'No lyrics'}</p>
        </>
      )}
    </div>
  </div>
}