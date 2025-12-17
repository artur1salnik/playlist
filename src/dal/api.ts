export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            'api-key': 'c4861782-c134-481a-b40f-7bb6bb980150'
        }
    }).then(res => res.json())

    return promise
}

export type AttachmentDto = {
    url: string
}

export type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string,
    attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': 'c4861782-c134-481a-b40f-7bb6bb980150'
        }
    }).then(res => res.json())

    return promise
}