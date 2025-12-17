import { TrackItem } from "./TrackItem"
import { useTracks } from "../bll/useTracks"
import styles from "./tracks.module.css"

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TrackList(props: Props) {
    const { tracks } = useTracks()

    const handleClick = (trackId: string) => {
        props.onTrackSelect?.(trackId)
    }

    if (tracks === null) {
        return (
            <>
                <h1>Media Player</h1>
                <div>Loading...</div>
            </>
        )
    }

    if (tracks.length === 0) {
        return (
            <>
                <h1>Media Player</h1>
                <div>No tracks</div>
            </>
        )
    }

    return <ul className={styles.tracks}>
        {tracks.map((track) => {
            return (
                <TrackItem key={track.id}
                    selectedTrackId={props.selectedTrackId}
                    track={track}
                    onSelect={handleClick} />
            )
        })}
    </ul>
}