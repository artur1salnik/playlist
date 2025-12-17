import { Header } from "./Header"
import { Footer } from "./Footer"
import { SidebarMenu } from "./SidebarMenu"
import { PageTitle } from "./PageTitle"
import { TrackList } from "./TrackList"
import { TrackDetail } from "./TrackDetail"
import { useTrackSelection } from "../bll/useTrackSelection"

export function MainPage() {
    const { trackId, setTrackId } = useTrackSelection()

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id)
    }

    return <div>
        <Header />
        <SidebarMenu />
        <PageTitle />
        <div style={{
            display: 'flex',
            gap: '40px'
        }}>
            <TrackList
                onTrackSelect={handleTrackSelect}
                selectedTrackId={trackId} />
            <TrackDetail selectedTrackId={trackId} />
        </div>
        <Footer />
    </div>
}