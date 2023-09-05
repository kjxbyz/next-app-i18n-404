import { notFound } from 'next/navigation'

export default function Blog () {
    if (true) {
        return notFound()
    }

    return (
        <div>Blog Detail</div>
    )
}
