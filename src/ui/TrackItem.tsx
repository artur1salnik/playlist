import type { TrackListItemOutput } from "../dal/api"
import styles from "./tracks.module.css"

type Props = {
    selectedTrackId: string | null
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}

export function TrackItem(props: Props) {

    return <li className={styles.track + ' ' + (props.selectedTrackId === props.track.id ? styles.selected : '')}>
        <div onClick={() => {
            props.onSelect(props.track.id)
        }}>{props.track.attributes.title}</div>
        <audio src={props.track.attributes.attachments[0].url} controls />
    </li>
}