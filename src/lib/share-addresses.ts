import {
  WebRTC,
  WebRTCDirect,
  WebSocketsSecure,
  WebTransport
} from '@multiformats/multiaddr-matcher'
import type { Multiaddr } from '@multiformats/multiaddr'

export const getWebRTCAddrs_z = (addrs?: Multiaddr[]): Multiaddr[] => {
  return (
    addrs?.filter(
      (addr: Multiaddr) =>
        WebRTC.exactMatch(addr) &&
        (WebRTCDirect.matches(addr) ||
          WebSocketsSecure.matches(addr) ||
          WebTransport.matches(addr))
    ) ?? []
  )
}
