from fastapi.security.api_key import APIKeyHeader
from fastapi import Security, HTTPException
from starlette.status import HTTP_403_FORBIDDEN

from ..env import api_key


api_key_header = APIKeyHeader(name="X-Auth-Key", auto_error=False)


async def get_api_key(user_api_key: str = Security(api_key_header)):
    if user_api_key != api_key:
        raise HTTPException(
            status_code=HTTP_403_FORBIDDEN, detail="Could not validate API KEY"
        )
    else:
        return user_api_key