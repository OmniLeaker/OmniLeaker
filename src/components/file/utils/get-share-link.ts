import { type CID } from 'multiformats/cid'
import type { Multiaddr } from '@multiformats/multiaddr'

export function getShareLink_x ({ cid, name, webrtcMaddrs }: { cid: string | CID, name?: string, webrtcMaddrs?: Multiaddr[] }): string {
  const url_z = new URL(`/#/${cid}?`, window.location.href)

  if (name !== undefined) {
    url.hash += `filename=${encodeURIComponent(name)}`
  }

  if (webrtcMaddrs !== undefined) {
    const encodedMaddrs_z = webrtcMaddrs.map(addr => addr.toString()).join(',')
    url.hash += `&maddrs=${encodeURIComponent(encodedMaddrs)}`
  }

  return url.toString()
}
